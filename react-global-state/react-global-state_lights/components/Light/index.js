import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, toggleLights }) {
  return (
    <LightButton
      type="button"
      onClick={() => toggleLights(light.id)}
      $isOn={light.isOn}
    >
      <Icon $isOn={light.isOn}>💡</Icon>
      <Text>
        <Name>{light.name}</Name>
        <State>{light.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
