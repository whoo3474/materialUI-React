import React, { createContext } from 'react';

export const { Provider, Consumer } = createContext()

export const withContext = Component =>  props => 
// HOC~ 커리 구조로써, Component를 먼저 감싸서 처음 인자로 받은후, 부모 컨테이너에게 props를 받아서 리턴한다.
    (<Consumer>
        {value=><Component {...value} {...props} />}
    </Consumer>)
// Consumer로 감싸게 되면, provider 의 value값들을 사용할수있다.