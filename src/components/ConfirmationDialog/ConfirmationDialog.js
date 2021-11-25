import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@material-ui/core/Button";
import { styled } from "@mui/material/styles";
import { staticImage } from "../../images/index";
import PropTypes from "prop-types";

// Boiler plate for Dialog X button Icon
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	}
}));

const BootstrapDialogTitle = (props) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle
			sx={{
				m: 0,
				p: 2,
				justifyItems: "right",
			}}
			{...other}
		>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						left: "calc((100%) - 20px)",
						bottom: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

/**
 * Passes in inputs to customize the dialog box
 * @param parentProps passes functionality that governs dialog behavior
 * @param dialogType specifies the type of dialog box
 */
const ConfirmationDialog = (props) => {
	const { dialogType, parentProps } = props;

	const handleClose = parentProps.handleClose;
	const handleDelete = parentProps.handleDelete;
	const openEdit = parentProps.openEdit;
	const openDelete = parentProps.openDelete;
  const deleteDialog = parentProps.deleteDialog;
  const editDialog = parentProps.editDialog;
  const confirmButton = parentProps.confirmButton;

	return (
		<BootstrapDialog
			onClose={() =>
				dialogType === "delete" ? handleClose(false) : handleClose(true)
			}
			aria-label="customized-dialog-title"
			open={dialogType === "delete" ? openDelete : openEdit}
		>
			<BootstrapDialogTitle
				id="customized-dialog-title"
				onClose={() =>
					dialogType === "delete" ? handleClose(false) : handleClose(true)
				}
			/>
			{dialogType === "delete" && (
				<img src={staticImage} alt="confirmation icon" />
			)}
			<DialogContent>
				<DialogContentText>
					{dialogType === "delete"
						? deleteDialog
						: editDialog}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				{dialogType === "delete" ? (
					<>
						<Button autoFocus onClick={() => handleClose(false)}>
							Cancel
						</Button>
						<Button onClick={handleDelete} color="secondary">
							{confirmButton}
						</Button>
					</>
				) : (
					<Button onClick={() => handleClose(true)} autoFocus>
						Okay
					</Button>
				)}
			</DialogActions>
		</BootstrapDialog>
	);
};

export default ConfirmationDialog;
