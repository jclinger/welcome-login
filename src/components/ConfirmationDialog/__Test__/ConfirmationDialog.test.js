import * as React from "react";
import { render, screen } from "@testing-library/react";
import ConfirmationDialog from "../ConfirmationDialog";

// Params for testing the DialogConfirmation rendering
const deleteDialog = "Are you sure you want to delete your account?";
const editDialog = "Your account has been edited";
const confirmButton = "Delete";

const handleClose = (editButton) => {};
const handleDelete = () => {};

const parentProps = {
  handleClose,
  handleDelete,
  openEdit: true,
  openDelete: true,
  deleteDialog,
  editDialog,
  confirmButton
}

test("ConfirmationDialog Edit renders", async () => {
  render(<ConfirmationDialog
    dialogType={"edit"}
    parentProps={parentProps}
  />);

  expect(
    screen.getByLabelText("customized-dialog-title")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Your account has been edited")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Okay")
  ).toBeInTheDocument();
});

test("ConfirmationDialog Delete renders", async () => {
  render(<ConfirmationDialog
    dialogType={"delete"}
    parentProps={parentProps}
  />);

  expect(
    screen.getByLabelText("customized-dialog-title")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Are you sure you want to delete your account?")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Delete")
  ).toBeInTheDocument();
});