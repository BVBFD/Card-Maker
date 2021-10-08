import { getDatabase, ref, onValue, set, remove, off } from "firebase/database";

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
      //  mdn short-circuit evaluation 참조.
      // 처음 data가 false면 뒷 부분은 실행조차 되지 않는다.
      // data && ~ 추가해서 false 판정뒤 null이 아닌 false라는 object의 일종으로 변환해주어야
      // previewPart.jsx {Object.keys(cards).map ~~ 이 부분이 실행 될수 있다.
      // 즉 상태가 null일때 처리를 해주어야 onUpdate(value) 에서 콜백의 인자 value를
      // 다른 컴포넌트에서 받아올 수 있음.

      // function A(){ console.log('called A'); return false; }
      // function B(){ console.log('called B'); return true; }
      // console.log( A() && B() );
      // > "called A"
      // > false

      // function A(){ console.log('called A'); return true; }
      // function B(){ console.log('called B'); return false; }
      // console.log( A() && B() );
      // > "called A"
      // > "called B"
      // > false
    });
    return () => off(query);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }
}
export default CardRepository;
