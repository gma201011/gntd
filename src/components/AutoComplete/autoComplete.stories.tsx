import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AutoComplete, { DataSourceType } from "./autoComplete";

interface NewNameListProps {
  // value: string;
  // number: number;
  login: string;
  url: string;
}

const autoCompleteMeta: Meta<typeof AutoComplete> = {
  title: "AutoComplete",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default autoCompleteMeta;
type Story = StoryObj<typeof AutoComplete>;

export const Default: Story = (args: any) => {
  const nameList = [
    "John",
    "Emily",
    "Michael",
    "Jessica",
    "Christopher",
    "Sarah",
    "Daniel",
    "Jennifer",
    "David",
    "Lisa",
  ];
  const newNameList = [
    { value: "John", number: 1 },
    { value: "Emily", number: 2 },
    { value: "Michael", number: 3 },
    { value: "Jessica", number: 4 },
    { value: "Christopher", number: 5 },
    { value: "Sarah", number: 6 },
    { value: "Daniel", number: 7 },
    { value: "Jennifer", number: 8 },
    { value: "David", number: 9 },
    { value: "Lisa", number: 10 },
  ];

  // const handleFetch = (query: string) => {
  //   return nameList
  //     .filter((name) => name.includes(query))
  //     .map((item) => ({ value: item }));
  // };

  // const handleFetch = (query: string) => {
  //   return newNameList.filter((dataArr) => dataArr.value.includes(query));
  // };

  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        if (!items) return;
        return items
          .slice(0, 50)
          .map((item: { login: string }) => ({ value: item.login, ...item }));
      });
  };
  const renderOption = (item: DataSourceType) => {
    const itemWithNumber = item as DataSourceType<NewNameListProps>;
    return (
      <>
        <ul>Name: {itemWithNumber.login}</ul>
        {/* <h4>Number: {itemWithNumber.url}</h4> */}
      </>
    );
  };
  return (
    <AutoComplete
      fetchSuggestions={handleFetch}
      onSelect={action("selected")}
      renderOption={renderOption}
    />
  );
};

Default.storyName = "Default";
