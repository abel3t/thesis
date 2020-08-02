import React from 'react';
import {
  CartPopupButtonStyled,
  CartPopupBoxButton,
  TotalItems,
} from './cart-popup.style';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
type CartButtonProps = {
  style?: React.CSSProperties;
  itemCount?: number;
  itemPostfix?: any;
  price?: number;
  pricePrefix?: string;
  className?: string;
  onClick?: (e: any) => void;
};

const CartPopupButton: React.FC<CartButtonProps> = ({
  itemCount,
  style,
  onClick,
  className,
}) => (
  <CartPopupButtonStyled style={style} onClick={onClick} className={className}>
    <Badge badgeContent={itemCount || 0} color="error" showZero>
      <ShoppingCartIcon />
    </Badge>
  </CartPopupButtonStyled>
);

export const BoxedCartButton: React.FC<CartButtonProps> = ({
  itemCount,
  style,
  onClick,
  className,
}) => (
  <CartPopupBoxButton style={style} onClick={onClick} className={className}>
    <TotalItems>
      <Badge badgeContent={itemCount || 0} color="error" showZero>
        <ShoppingCartIcon />
      </Badge>
    </TotalItems>
  </CartPopupBoxButton>
);

export default CartPopupButton;
