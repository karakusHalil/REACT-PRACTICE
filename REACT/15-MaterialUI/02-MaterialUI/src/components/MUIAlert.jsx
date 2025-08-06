import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const MUIAlert = () => {
  return (
    <>
      <Alert severity="info"> Bilgilendirme mesajı </Alert>
      <Alert severity="error" variant="filled">
        Bir aksilik yaşandı
      </Alert>
      <Alert severity="warning" variant="outlined">
        Hata mesajı
      </Alert>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Başarılı aksiyon
      </Alert>
    </>
  );
};

export default MUIAlert;
