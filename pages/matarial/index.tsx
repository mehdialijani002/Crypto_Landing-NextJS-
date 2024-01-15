// components/MyForm.tsx
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FC } from "react";

interface FormInput {
  firstName: string;
  lastName: string;
  email: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const MyForm: FC = () => {
  const theme = createTheme({
    direction: "rtl",
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <div dir="rtl">
              <TextField
                label="نام"
                variant="outlined"
                margin="normal"
                fullWidth
                {...field}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </div>
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              label="نام خانوادگی"
              variant="outlined"
              margin="normal"
              fullWidth
              {...field}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="ایمیل"
              variant="outlined"
              margin="normal"
              fullWidth
              {...field}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          ارسال
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default MyForm;
