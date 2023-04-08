import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';


interface MyButtonProps extends ButtonProps {
  id: string,
  typographyText: string
}

export default function MyButton({id, typographyText, ...props}: MyButtonProps){
  const EndIcon = ({ typographyId }: { typographyId: string }) => (
    <ArrowForwardIosIcon sx={{zIndex: '98'}} id={typographyId} fontSize='large' />
  )
  return (
    <Button {...props} id={id} endIcon={<EndIcon typographyId={id} />} fullWidth sx={{height: {md: '90px', xs: '70px'}, mt: '20px', zIndex: '99'}} variant="contained">
      <Typography fontWeight={600} id={id} fontSize={{md: '25px', xs: '22px'}}>{typographyText}</Typography>
    </Button>
  )
}