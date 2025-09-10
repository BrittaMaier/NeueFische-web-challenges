import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onTurnOff, onTurnOn }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={onTurnOff}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={onTurnOn}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
