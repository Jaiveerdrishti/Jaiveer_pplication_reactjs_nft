import { TextArea } from "components";
export default {
  title: "jaiveer_s_application_reactjs_nft/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder8",
  variant: "OutlineGray400",
  size: "sm",
  placeholder: "placeholder",
};
