import React, { useState } from "react";

export interface InformationProps {
  name: string;
  lastName: string;
  email: string;
  tastes: string;
}
export function Information(props: InformationProps) {
  return (
    <div>
      <form action="">
        <img
          src="https://scontent.fsyq4-1.fna.fbcdn.net/v/t39.30808-6/329539602_1133758127285843_4665986158086190813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Zn8uttHSavcAX-IpjKC&_nc_ht=scontent.fsyq4-1.fna&oh=00_AfDSZ4iFN1MWulkHEo_atrC6zgKjq4cXWiNCGWo_rL5WlQ&oe=64436857"
          height={[200, 200, 200, 200]}
          width={200}
          justify-context={"center"}
        ></img>
        <button></button>
        <ul>
          <li>{props.name}</li>
          <li>{props.lastName}</li>
          <li>{props.email}</li>
          <li>{props.tastes}</li>
        </ul>
      </form>
    </div>
  );
}

export default Information;
