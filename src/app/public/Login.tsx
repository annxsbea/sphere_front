import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./components/LoginForm";
import { SignUpForm } from "./components/SignUpForm";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ModeToggle } from "@/components/ui/mode-toggle";

export const Login = () => {
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-2.jpg)" }}
      ></div>
      <nav className="absolute right-1 top-1 z-[20]">
        <ModeToggle />
      </nav>
      <div
        className="relative z-10 flex items-center justify-center lg:h-screen"
        data-testid="login-container"
      >
        <div className="w-full">
          <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold uppercase mb-5">
  Sp<span className="text-pink-700">H</span>ere
</h1>

            <h2 className="text-xl text-pink-200">Sua rede, suas conexões, sua comunidade.</h2>
          </div>
          <Tabs
            defaultValue="login"
            className="w-full mb-4 md:max-w-2xl md:px-8 mx-auto lg:mb-0"
          >
            <TabsList className="grid grid-cols-2 mx-32 mb-5">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-[#e4255e] data-[state=active]:text-white text-gray-400"
                data-testid="trigger-login"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-[#e4255e] data-[state=active]:text-white text-gray-400"
                data-testid="trigger-register"
              >
                Registrar-se
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="min-h-[414px]">
              <Card className="mx-36 py-4 animate-in fade-in duration-700">
                <LoginForm />
              </Card>
            </TabsContent>
            <TabsContent value="register" className="min-h-[414px]">
              <Card className="mx-36 py-4 animate-in fade-in duration-700">
                <SignUpForm />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[5]"
      />
    </div>
  );
};
