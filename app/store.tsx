import create from 'zustand';

interface Product {
  id: number;
  title: string;
  price: number;
  des: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) => {
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.title === product.title);
      if (existingItem) {
        // 이미 장바구니에 있는 상품인 경우 수량만 증가
        return {
          cartItems: state.cartItems.map((item) =>
            item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // 장바구니에 없는 상품인 경우 새로 추가
        return {
          cartItems: [
            ...state.cartItems,
            { ...product, quantity: 1 } // 처음 추가되는 상품은 수량 1로 초기화
          ],
        };
      }
    });
  },
}));

export default useCartStore;