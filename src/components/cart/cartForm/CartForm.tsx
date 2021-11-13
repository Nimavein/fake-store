import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  CartFormInput,
  CartFormLabel,
  CartFormWrapper,
  CartFormEntry,
  CartFormSelect,
  CartFormOption,
  CartFormSubmitButton,
  InvisibleInput,
} from "./CartForm.styles";
import countryList from "react-select-country-list";
import { Divider } from "../Cart.styles";
import { useCartData } from "../../../contextProviders/cartProvider";
import {
  CartFormDataType,
  CartFormPropsType,
  CountryDataType,
} from "../../../types";

const CartForm: React.FC<CartFormPropsType> = (props) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<CartFormDataType>();
  const options: CountryDataType[] = useMemo(() => countryList().getData(), []);
  const { cart, setCart } = useCartData();

  useEffect(() => {
    let submitSuccessfulTimer = setTimeout(
      () => setIsSubmitSuccessful(false),
      4000
    );
    return () => {
      clearTimeout(submitSuccessfulTimer);
    };
  }, [isSubmitSuccessful]);

  const onSubmit = (data: CartFormDataType) => {
    setIsSubmitSuccessful(true);
    console.log(data);
    reset();
    setTimeout(() => setCart([]), 4000);
  };
  return (
    <CartFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CartFormEntry>
        <CartFormLabel>Name*</CartFormLabel>
        <CartFormInput
          placeholder="Enter your name"
          {...register("name")}
          required
          name="name"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>Surname*</CartFormLabel>
        <CartFormInput
          placeholder="Enter your surname"
          {...register("surname")}
          required
          name="surname"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>E-mail*</CartFormLabel>
        <CartFormInput
          type="email"
          placeholder="Enter your e-mail"
          {...register("email")}
          required
          name="email"
        />
      </CartFormEntry>

      <CartFormEntry>
        <CartFormLabel>Country*</CartFormLabel>
        <CartFormSelect id="country" {...register("country")} required>
          <CartFormOption value="">Select country</CartFormOption>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            );
          })}
        </CartFormSelect>
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>ZIP*</CartFormLabel>
        <CartFormInput
          placeholder="Enter your zip-code"
          {...register("zip")}
          required
          name="zip"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>City*</CartFormLabel>
        <CartFormInput
          placeholder="Enter your city"
          {...register("city")}
          required
          name="city"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>Street*</CartFormLabel>
        <CartFormInput
          placeholder="Enter your street"
          {...register("street")}
          required
          name="street"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>Phone number</CartFormLabel>
        <CartFormInput
          placeholder="Enter your phone number"
          {...register("phoneNumber")}
          name="phone"
        />
      </CartFormEntry>
      <Divider />
      <CartFormSubmitButton
        isSubmitSuccessful={isSubmitSuccessful}
        type="submit"
      >
        <InvisibleInput
          {...register("cartTotal")}
          value={props.cartTotal}
          name="cartTotal"
        />
        <InvisibleInput {...register("cart")} value={cart} name="cart" />
        {isSubmitSuccessful ? "Bought Successfully" : "Submit"}
      </CartFormSubmitButton>
    </CartFormWrapper>
  );
};

export default CartForm;
