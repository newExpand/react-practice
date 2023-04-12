import { useEffect, useState } from "react";

// 전역 상태
let globalState = {};
// 리스너
let listeners = [];
// 액션
let actions = {};

// 커스텀 훅
export const useStore = (shouldListen = true) => {
    // 상태 업데이트 함수
    const setState = useState(globalState)[1];

    // 디스패치 함수
    const dispatch = (actionIdentifier, payload) => {
        // 액션 실행 후 새로운 상태 반환
        const newState = actions[actionIdentifier](globalState, payload);
        // 전역 상태 업데이트
        globalState = { ...globalState, ...newState };

        // 리스너에게 전역 상태 업데이트 알림
        for (const listener of listeners) {
            listener(globalState);
        }
    };

    // 컴포넌트 마운트 시 리스너 등록, 언마운트 시 리스너 제거
    useEffect(() => {
        if (shouldListen) {
            listeners.push(setState);
        }

        return () => {
            if (shouldListen) {
                listeners = listeners.filter((li) => li !== setState);
            }
        };
    }, [setState, shouldListen]);

    // 전역 상태와 디스패치 함수 반환
    return [globalState, dispatch];
};

// 전역 상태와 액션 초기화 함수
export const initStore = (userActions, initialState) => {
    if (initialState) {
        globalState = { ...globalState, ...initialState };
    }
    actions = { ...actions, ...userActions };
};
