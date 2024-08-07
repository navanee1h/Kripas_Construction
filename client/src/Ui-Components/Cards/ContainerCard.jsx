/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import { forwardRef } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardHeader,
	Divider,
} from "@mui/material";
// import { useSelector } from "react-redux";

// constant
const headerSX = {
	"& .MuiCardHeader-action": { mr: 0 },
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

const ContainerCard = forwardRef(
	(
		{
			border = false,
			boxShadow,
			children,
			content = true,
			contentClass = "",
			contentSX = {},
			darkTitle,
			secondary,
			shadow,
			sx = {},
			title,
			...others
		},
		ref
	) => {
		const theme = useTheme();
		// const customization = useSelector((state) => state.customization);

		return (
			<Box sx={{ position: "relative" }}>
				<Card
					ref={ref}
					{...others}
					sx={{
						border: border ? "1px solid" : "none",
						borderColor: theme.palette.primary[200] + 25,
						":hover": {
							boxShadow: boxShadow
								? shadow || "0 2px 14px 0 rgb(32 40 45 / 8%)"
								: "inherit",
						},
						...sx,
					}}
				>
					{/* card header and action */}
					{title && (
						<CardHeader
							sx={{ p: 2.5 }}
							title={<Typography variant="h4">{title}</Typography>}
							action={secondary}
						/>
					)}
					{/* content & header divider */}
					{title && (
						<Divider
							sx={{
								opacity: 1,
								borderColor: theme.palette.grey[300],
							}}
						/>
					)}
					{/* card content */}
					{content && (
						<CardContent
							sx={{
								padding: "0.7rem",
								...contentSX,
							}}
							className={contentClass}
						>
							{children}
						</CardContent>
					)}
					{!content && children}
				</Card>
			</Box>
		);
	}
);

ContainerCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default ContainerCard;
