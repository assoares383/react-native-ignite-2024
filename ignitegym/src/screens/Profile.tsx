import { Center, ScrollView, VStack } from "native-base";

import { ScreenHeader } from "../components/ScreenHeader";
import { UserPhoto } from "../components/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
            <UserPhoto
                source={{
                    uri: "https://avatars.githubusercontent.com/u/15836394?v=4",
                }}
                alt="Imagem do Usuario"
                size={33}
            />
        </Center>
      </ScrollView>
    </VStack>
  );
}
