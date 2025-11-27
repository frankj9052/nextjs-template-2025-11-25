"use client";
import { testSlice, useDispatch, useSelector } from "@/libs/redux";
import { Button } from "@heroui/react";

export const ReduxTest = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.test.activeStep);

  const clickSetActiveStep = () => {
    dispatch(testSlice.actions.setActiveStep(activeStep + 1));
  };
  return (
    <div>
      <div>Redux Test: {activeStep}</div>
      <Button onPress={clickSetActiveStep}>Redux Test</Button>
    </div>
  );
};
