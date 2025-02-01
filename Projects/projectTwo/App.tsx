import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as Yup from "yup";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Should be min of 4 characters")
    .max(16, "Should be min of 16 characters")
    .required("Password Length is required"),
});
const App = () => {
  const [password, setPassword] = useState("");
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let passwordResult = "";
    let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let specialChars = "#$&*_+-";
    if (upperCase) {
      passwordResult += upperCaseChars;
    }
    if (lowerCase) {
      passwordResult += lowerCaseChars;
    }
    if (numbers) {
      passwordResult += numberChars;
    }
    if (specialChar) {
      passwordResult += specialChars;
    }

    const Result = generatePassword(passwordResult, passwordLength )

    setPassword(Result)
    setIsPasswordGenerated(true)
  };

  const generatePassword = (characters: string, passwordLength: number) => {
    let result = "";
    for (let i = 0; i < passwordLength; i++) {
      let charactersLength = Math.round(Math.random() * characters.length);
      result += characters.charAt(charactersLength);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword("");
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSpecialChar(false);
  };

  return (
    <SafeAreaProvider>
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>PASSWORD GENERATOR</Text>
            <Formik
              initialValues={{ passwordLength: "" }}
              validationSchema={PasswordSchema}
              onSubmit={(values) => {
                console.log(values);
                generatePasswordString(+values.passwordLength); // + makes one string to number instead of that we can use Number() also
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text style={styles.heading}>
                        Enter Password Length :{" "}
                      </Text>
                      {touched.passwordLength && errors.passwordLength &&
                        <Text style={styles.errorText}>
                          {errors.passwordLength}
                        </Text>
                      }
                    </View>
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange("passwordLength")}
                      placeholder="Ex. 4"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <Text>Include Lowercase : </Text>
                    </View>
                    <View>
                      <BouncyCheckbox
                        isChecked={lowerCase}
                        onPress={() => setLowerCase(!lowerCase)}
                        fillColor="#29AB87"
                      />
                    </View>
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>
                      Include Uppercase letters
                    </Text>
                    <View>
                    <BouncyCheckbox
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#FEA82F"
                    />
                    </View>
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Numbers :</Text>
                    <View>
                    <BouncyCheckbox
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#5448C8"
                    />
                    </View>
                  </View>
                  <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Symbols : </Text>
                    <View>
                    <BouncyCheckbox
                      isChecked={specialChar}
                      onPress={() => setSpecialChar(!specialChar)}
                      fillColor="#261447"
                    />
                    </View>
                  </View>

                  <View style={styles.formActions}>
                    <TouchableOpacity style={styles.primaryBtn} disabled={!isValid} onPress={() => handleSubmit()}>
                      <Text style={styles.primaryBtnTxt}>Generate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryBtn} onPress={()=>{ handleReset() ; resetPasswordState();}}>
                      <Text style={styles.secondaryBtnTxt}>Reset</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
            { isPasswordGenerated ? (
              <View style={[styles.card , styles.cardElevated]} >
                <Text style={styles.subTitle}>Result :</Text>
                <Text style={styles.description}>Long Press to Copy</Text>
                  <Text selectable={true} style={styles.generatedPassword }>{password}</Text>
              </View>
            ) : null }
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 2,
  },
  description: {
    color: "#758283",
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputColumn: {
    flexDirection: "column",
  },
  inputStyle: {
    padding: 8,
    width: "30%",
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#16213e",
  },
  errorText: {
    fontSize: 12,
    color: "#ff0d10",
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#5DA3FA",
  },
  primaryBtnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: "#CAD5E2",
  },
  secondaryBtnTxt: {
    textAlign: "center",
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: "#FFFECB",
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    fontWeight: "bold" ,
    textAlign: "center",
    marginBottom: 12,
    color: "#000",
  },
});

export default App;
