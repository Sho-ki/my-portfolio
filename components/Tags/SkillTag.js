import { Typography } from '@mui/material';

export function SkillTag({ size, name, color, tag }) {
  let bgColor;

  switch (name) {
    case 'React':
      bgColor = '#d32f2f';
      break;
    case 'Node.js':
      bgColor = '#558b2f';
      break;
    case 'Next.js':
      bgColor = '#f44336';
      break;
    case 'TypeScipt':
      bgColor = '#0097a7';
      break;
    case 'HTML/CSS':
      bgColor = '#9e9d24';
      break;
    case 'SQL':
      bgColor = '#0288d1';
      break;
    default:
      bgColor = '#149918';
  }
  return (
    <>
      <Typography
        gutterBottom
        variant={tag || 'p'}
        fontSize={size || '1em'}
        border={`1px solid ${bgColor}`}
        color={color || 'whitesmoke'}
        px='1.5em'
        py='3px'
        m='3px'
        borderRadius='1em'
        display='inline'
      >
        {name}
      </Typography>
    </>
  );
}
