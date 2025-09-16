import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ onQuickActions }) {
  return (
    <StyledQuickActions>
      <Button type="button" onClick={() => onQuickActions(false)}>
        Turn all lights off
      </Button>
      <Button type="button" onClick={() => onQuickActions(true)}>
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
