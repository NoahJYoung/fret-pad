import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { volumeOff, volumeOn } from "../assets/images";
import { toggleSound } from "../features/appSlice";

const SoundButton = () => {
  const soundState = useSelector((state) => state.value.settings.sound);
  const dispatch = useDispatch();
  return soundState ? (
    <button className="soundOnBtn soundBtn toolbarBtn" onClick={() => dispatch(toggleSound())}>
      <img className="sounddBtnImage" alt="sound on" src={volumeOn} />
    </button>
  ) : (
    <button className="soundOffBtn soundBtn toolbarBtn"  onClick={() => dispatch(toggleSound())}>
      <img className="soundBtnImage" alt="sound off" src={volumeOff} />
    </button>
  );
};

export default SoundButton;
