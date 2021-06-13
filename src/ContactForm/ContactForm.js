import { Form, Formik, getIn } from "formik";
import {
  TextField,
  Button,
  Box,
  TextareaAutosize,
  FormHelperText,
} from "@material-ui/core";
import * as yup from "yup";
import { withNamespaces } from "react-i18next";

function ContactForm({ t }) {
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(2, t("nameLonger"))
      .max(36, t("nameShorter"))
      .required(t("nameRequired")),
    surname: yup
      .string()
      .min(2, t("surnameLonger"))
      .max(36, t("surnameShorter"))
      .required(t("surnameRequired")),
    email: yup
      .string()
      .email(t("emailValid"))
      .min(2, t("emailLonger"))
      .max(36, t("emailShorter"))
      .required(t("emailRequire")),
    opinion: yup
      .string()
      .min(10, t("opinionLonger"))
      .max(200, t("opinionShorter"))
      .required(t("opinionRequired")),
  });

  const inputStyle = {
    width: "640px",
    marginTop: "20px",
  };

  return (
    <Box
      style={{
        backgroundColor: "#EDE7D9",
        width: "100%",
        height: "auto",
        paddingRight: "5px",
        paddingLeft: "15px",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "0px",
        left: "-20px",
      }}
    >
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          surname: "",
          email: "",
          opinion: "",
        }}
        onSubmit={(values) => {
          console.group("Consoled values:");
          console.log(values.name);
          console.log(values.surname);
          console.log(values.email);
          console.log(values.opinion);
          console.groupEnd();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        }) => (
          <Form
            style={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TextField
              id="name"
              type="text"
              name="name"
              label={t("name")}
              variant="outlined"
              style={inputStyle}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {getIn(errors, "name") && getIn(touched, "name") && (
              <FormHelperText style={{ color: "red" }}>
                {getIn(errors, "name")}
              </FormHelperText>
            )}
            <TextField
              id="surname"
              type="text"
              name="surname"
              label={t("surname")}
              variant="outlined"
              style={inputStyle}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            />
            {getIn(errors, "surname") && getIn(touched, "surname") && (
              <FormHelperText style={{ color: "red" }}>
                {getIn(errors, "surname")}
              </FormHelperText>
            )}
            <TextField
              id="email"
              name="email"
              label={t("email")}
              variant="outlined"
              style={inputStyle}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {getIn(errors, "email") && getIn(touched, "email") && (
              <FormHelperText style={{ color: "red" }}>
                {getIn(errors, "email")}
              </FormHelperText>
            )}
            <TextareaAutosize
              id="opinion"
              name="opinion"
              /* aria-label="empty textarea" */
              placeholder={t("your opinion")}
              rowsMax={9}
              style={{
                width: "620px",
                marginTop: "20px",
                backgroundColor: "#EDE7D9",
                borderRadius: "3px",
                padding: "10px",
                maxHeight: "120px",
                maxWidth: "620px",
                fontSize: "1rem",
                fontFamily: "sans-serif",
              }}
              onChange={handleChange}
              value={values.opinion}
              onBlur={handleBlur}
            />
            {getIn(errors, "opinion") && getIn(touched, "opinion") && (
              <FormHelperText style={{ color: "red" }}>
                {getIn(errors, "opinion")}
              </FormHelperText>
            )}
            <Box
              display="flex"
              width="20%"
              marginTop="10px"
              justifyContent="space-around"
            >
              <Button
                onClick={() => handleSubmit()}
                color="primary"
                variant="outlined"
              >
                {t("submit")}
              </Button>
              <Button color="primary" onClick={() => handleReset()}>
                {t("clear")}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default withNamespaces()(ContactForm);
