import styled from "styled-components";

type FlexWraperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string
}

export const FlexWraper = styled.div<FlexWraperPropsType> `
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'no-wrap'};
`