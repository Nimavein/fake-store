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
} from "./CartForm.styles";
import countryList from "react-select-country-list";

const CartForm: React.FC = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm();
  const options = useMemo(() => countryList().getData(), []);
  console.log(options);

  useEffect(() => {
    let submitSuccessfulTimer = setTimeout(
      () => setIsSubmitSuccessful(false),
      4000
    );
    return () => {
      clearTimeout(submitSuccessfulTimer);
    };
  }, [isSubmitSuccessful]);

  const onSubmit = (data: any) => {
    setIsSubmitSuccessful(true);
    console.log(data);
    reset();
  };
  return (
    <CartFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CartFormEntry>
        <CartFormLabel>Name</CartFormLabel>
        <CartFormInput
          placeholder="Enter your name"
          {...register("name")}
          required
          name="name"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>Surname</CartFormLabel>
        <CartFormInput
          placeholder="Enter your surname"
          {...register("surname")}
          required
          name="surname"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>E-mail</CartFormLabel>
        <CartFormInput
          placeholder="Enter your e-mail"
          {...register("email")}
          required
          name="email"
        />
      </CartFormEntry>
      <CartFormEntry>
        <CartFormLabel>Country</CartFormLabel>
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
      <CartFormSubmitButton
        isSubmitSuccessful={isSubmitSuccessful}
        type="submit"
      >
        {isSubmitSuccessful ? "Bought Successfully" : "Submit"}
      </CartFormSubmitButton>
    </CartFormWrapper>
  );
};

export default CartForm;
