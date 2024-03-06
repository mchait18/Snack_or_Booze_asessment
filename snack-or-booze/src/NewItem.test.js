import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewItem from "./NewItem";

function addItem(item, itemName = "Apples") {
    const itemInput = item.getByLabelText("Name:")
    fireEvent.change(itemInput, { target: { value: itemName } })
    const addButton = item.getByText("Add Item")
    fireEvent.click(addButton)
}

it("renders without crashing", function () {
    render(<NewItem />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewItem />);
    expect(asFragment()).toMatchSnapshot();
});


it("can add an item", function () {
    const item = render(<NewItem />);
    // addItem(item);
    // expect form to clear and todo to be on the page
    // expect(item.getByLabelText("Task:")).toHaveValue("");
    // expect(list.getByText("write tests")).toBeInTheDocument();
    // expect(list.getByText("Apples")).toBeInTheDocument();
    // expect(list.getByText("Add Item")).not.toBeInTheDocument();
});  