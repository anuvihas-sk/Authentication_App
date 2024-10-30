import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});


const register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>register</Text>
      <Formik
        initialValues={{ email: "abc@gmail.com", password: "123456", password: "123456" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          mutation
            .mutateAsync(values)
            .then((data) => {
              console.log("data", data);
              dispatch(loginAction(data));
            })
            .catch((err) => {
              console.log(err);
            });
          router.push("/(tabs)");
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange("confirmpassword")}
              onBlur={handleBlur("confirmpassword")}
              value={values.password}
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
                        <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange("confirmpassword")}
              onBlur={handleBlur("confirmpassword")}
              value={values.password}
              secureTextEntry
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>register</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}


export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
  button: {
    height: 50,
    backgroundColor: "#6200ea",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});