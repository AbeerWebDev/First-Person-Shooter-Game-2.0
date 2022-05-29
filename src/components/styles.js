import styled from "@emotion/styled";


export const theme = {
    colors: {
        primary: "#F5FFFA", //mint-cream
        secondary: 'blue', //light-blue
    },

    // fonts: {
    //     primary: "roboto",
    // }
};

export const TypographyWrapper = styled.div`
 display: 'flex';
 justify-content: top;
 align-items: center;
 padding: 100px;
 background-color: ${(props) => props.theme.colors.secondary};
 
`;

// export const TypographyStyling = styled.h2`
//  display: 'flex';
//  justify-content: top;
//  align-items: top;
//  padding: 10px;
//  background-color: yellow
 
// `;

