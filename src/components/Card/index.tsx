import styled from "styled-components"

const CardEstilizado = styled.div`
  background-color: var(--brightColor);
  border: 2px solid var(--darkColor);
  border-radius: 64px 64px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-top: -58px;
  padding: 50px 16px 20px 16px;

  @media screen and (min-width: 1024px){
    margin-top: -32px;
    padding-top: 90px;
  }
`

const Wrap = styled.div`
  max-width: 730px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Card: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <CardEstilizado>
      <Wrap>
        {children}
      </Wrap>
    </CardEstilizado>
  )
}

export default Card