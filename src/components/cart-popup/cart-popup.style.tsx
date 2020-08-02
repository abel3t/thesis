import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const CartPopupButtonStyled = styled('button')`
  height: 40px;
  width: 45px;
  text-align: center;
  background-color: ${themeGet('colors.primary.regular', '#00A7E1')};
  padding: 0;
  border-radius: 8px;
  box-shadow: ${themeGet('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  z-index: 999;
  color: #fff;

  @media (max-width: 767px) {
    height: 36px;
    bottom: 30px;
    right: 30px;
  }

  @media (min-width: 581px) {
    &:not(.fixedCartPopup) {
      display: none;
    }
  }
`;

const CartPopupBoxButton = styled('button')`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${themeGet('colors.primary.regular', '#00A7E1')};
  padding: 0;
  border-radius: ${themeGet('radii.base', '6px')} 6px 6px
    ${themeGet('radii.base', '6px')};
  box-shadow: ${themeGet('shadows.big', '0 21px 36px rgba(0, 0, 0, 0.16)')};
  border: 0;
  outline: 0;
  cursor: pointer;
  z-index: 99;
  margin: 10px;
  @media (max-width: 580px) {
    display: none;
  }
`;

const TotalItems = styled('span')`
  font-family: ${themeGet('fonts.body', 'sans-serif')};
  font-size: ${themeGet('fontSizes.sm', '13')}px;
  font-weight: ${themeGet('fontWeights.bold', '700')};
  color: ${themeGet('colors.white', '#ffffff')};
  padding-left: 5px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 10px;

  svg {
    margin-right: 10px;
  }
`;

export {
  CartPopupButtonStyled,
  CartPopupBoxButton,
  TotalItems,
};