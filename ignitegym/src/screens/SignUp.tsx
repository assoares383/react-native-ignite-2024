import { useNavigation } from "@react-navigation/native";
import { Center, Heading, Image, ScrollView, Text, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o email').email('E-mail invalido'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 digitos!'),
  confirm_password: yup.string().required('Confirme a senha').oneOf([yup.ref('password'), null], 'A confirmacao da senha nao confere')
})

export function SignUp() {
  const navigation = useNavigation();
  const { control, formState: { errors }, handleSubmit } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp({name, email, password, confirm_password}: FormDataProps) {
    console.log(name, email, password, confirm_password)
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="cover"
          position="absolute"
        />
        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Nome"
                onChangeText={onChange} 
                value={value} 
                errorMessage={errors.name?.message} 
              />
            )}
          />

          <Text color="white">
            
          </Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message} 
              />
            )}
          />

          <Text color="white">
            {errors.email?.message}
          </Text>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message} 
              />
            )}
          />

          <Controller
            control={control}
            name="confirm_password"
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Confirme Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.confirm_password?.message} 
              />
            )}
          />

          <Button 
            title="Criar e acessar" 
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
