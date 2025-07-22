import { useState } from "react";

function Day10 ({name, isMember}) {
    return(
        <h1>
            {isMember ? `${name} 님 다시 오셨군요` : `${name} 님 가입하시겠어요?`}
        </h1>
    )
}

function AppDay10() {
    return <Day10 name ={"머푸"} isMember={false} />;
}

export default AppDay10;