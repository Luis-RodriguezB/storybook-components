import './myLabel.css';

export interface Props {
  /**
   * Label content
   */
  label: string;

  /**
   * Size of label should have
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Define the color text
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Decide whether to capitalize the word or not
   */
  allCaps?: boolean;

  /**
   * Define text color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = 'Default Label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor = '#000000',
}: Props) => {
  return (
    <span style={{ color: fontColor}} className={`${size} text-${color}`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
