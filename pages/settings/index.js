import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SetLayout from "../../Layouts/setLayout";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/settings/account");
  }, []);
  return (
    <div>
      <SetLayout />
    </div>
  );
};

export default index;
