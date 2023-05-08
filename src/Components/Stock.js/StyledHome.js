import { styled } from "@mui/material";

export const StatusCardContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
}));

export const StyledCardDiv = styled("div")(({ theme, color }) => ({
    borderRadius: "4px",
    display: "flex",
    padding: "10px",
    minHeight: "120px",
    minWidth: "200px",
}));

export const StyledCardTitle = styled("p")(({ theme }) => ({
    fontSize: "20px",
    fontWeight: "600",
}));

export const StyledCount = styled("h2")(({ theme }) => ({
    fontSize: "45px",
    fontWeight: "800",
}));

