import React from 'react';
import dynamic from 'next/dynamic';

const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

interface DeviceType {
  mobile: boolean,
  tablet: boolean,
  desktop: boolean
}


const initialDeviceType: DeviceType = {
  mobile: false,
  tablet: false,
  desktop: false
}

const CartMenu = ({ deviceType }: any= initialDeviceType) => {
  return < CartPopUp deviceType={deviceType || initialDeviceType} />
}

export default CartMenu;
