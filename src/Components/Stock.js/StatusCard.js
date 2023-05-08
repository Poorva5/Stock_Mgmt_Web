import { StyledCardDiv, StyledCardTitle, StyledCount } from "./StyledHome";
import { CircularProgress } from "@mui/material";
  

const StatusCard = ({ card, isLoading, color }) => {
    return (
    <div style={{ marginTop: '20px', marginLeft: '20px', marginRight: '20px'}}>
      <StyledCardDiv style={{ background: color}}>
        {isLoading ? (
          <CircularProgress sx={{ color: "#6065D8" }} />
        ) : (
          <>
            <StyledCardTitle>{card.title}</StyledCardTitle>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 20px' }}>
              <StyledCount>{card.count}</StyledCount>
            </div>
          </>
        )}
      </StyledCardDiv>
    </div>
    );
};
  
export default StatusCard;