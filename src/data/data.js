//더미데이터

const importAll = (context) => {
    const images = {};
    context.keys().forEach((item) => {
        const key = item.replace('./', '').replace('.png', '');
        images[key] = context(item);
    });
    return images;
};

const coffeeImages = importAll(require.context('../img/coffee', false, /\.png$/));
const burgerImages = importAll(require.context('../img/burger', false, /\.png$/));

export const images = [
    {
        "id": 1, 
        "category" : "Coffee",
        "src" : coffeeImages.coffee1, 
        "alt" : "coffee1", 
        "korName" : "카페라떼", 
        "engName" : "Caffe Latte", 
        "description" : "카페라떼입니다! 카페라떼입니다! 카페라떼입니다! 카페라떼입니다!"
    },
    {
        "id": 2,
        "category" : "Coffee",
        "src" : coffeeImages.coffee2, 
        "alt" : "coffee2", 
        "korName" : "아이스 카페라떼" , 
        "engName" : "Ice Caffe Latte", 
        "description" : "아이스 카페라떼입니다! 아이스 카페라떼입니다! 아이스 카페라떼입니다! 아이스 카페라떼입니다!"
    },
    {
        "id": 3, 
        "category" : "Coffee",
        "src" : coffeeImages.coffee3, 
        "alt" : "coffee3", 
        "korName" : "디카페인 카페라떼" , 
        "engName" : "Decafein Caffe Latte", 
        "description" : "디카페인 카페라떼입니다! 디카페인 카페라떼입니다! 디카페인 카페라떼입니다! 디카페인 카페라떼입니다!"
    },
    {
        "id": 4, 
        "category" : "Coffee",
        "src" : coffeeImages.coffee4, 
        "alt" : "coffee4", 
        "korName" : "아이스 디카페인 카페라떼", 
        "engName" : "Decafein Ice Caffe Latte", 
        "description" : "아이스 디카페인 카페라떼입니다! 아이스 디카페인 카페라떼입니다! 아이스 디카페인 카페라떼입니다! 아이스 디카페인 카페라떼입니다!"
    },
    {
        "id": 5, 
        "category" : "Burger",
        "src" : burgerImages.burger1, 
        "alt" : "burger1", 
        "korName" : "더블 쿼터파운더 치즈 버거", 
        "engName" : "Double Quater Pounder Cheese Burger", 
        "description" : "더블 쿼터파운더 치즈 Burger!!"
    },
    {
        "id": 6, 
        "category" : "Burger",
        "src" : burgerImages.burger2, 
        "alt" : "burger2", 
        "korName" : "맥스파이시 상하이 버거", 
        "engName" : "Mac Spicy Shanhai Burger", 
        "description" : "맥스파이시 상하이 버거 Burger!!"
    },
    {
        "id": 7, 
        "category" : "Burger",
        "src" : burgerImages.burger3, 
        "alt" : "burger3", 
        "korName" : "쿼터파운더 치즈", 
        "engName" : "Quater Pounder Cheese Burger", 
        "description" : "쿼터파운더 치즈 Burger!!"
    },
    {
        "id": 8, 
        "category" : "Burger",
        "src" : burgerImages.burger4, 
        "alt" : "burger4", 
        "korName" : "토마토 치즈 비프 버거", 
        "engName" : "Tomato Cheese Beef Burger", 
        "description" : "토마토 치즈 비프 버거 Burger!!"
    },
    {
        "id": 9, 
        "category" : "Burger",
        "src" : burgerImages.burger5, 
        "alt" : "burger5", 
        "korName" : "빅맥", 
        "engName" : "Big Mac Burger", 
        "description" : "빅맥 Burger!!"
    },
    {
        "id": 10, 
        "category" : "Burger",
        "src" : burgerImages.burger6, 
        "alt" : "burger6", 
        "korName" : "맥크리스피 디럭스 버거", 
        "engName" : "Mac Crispy Derux Burger", 
        "description" : "맥크리스피 디럭스 버거 Burger!!"
    },
    {
        "id": 11, 
        "category" : "Burger",
        "src" : burgerImages.burger7, 
        "alt" : "burger7", 
        "korName" : "맥크리스피 클래식 버거", 
        "engName" : "Mac Crispy Classic Burger", 
        "description" : "맥크리스피 클래식 버거 Burger!!"
    },
    {
        "id": 12, 
        "category" : "Burger",
        "src" : burgerImages.burger8, 
        "alt" : "burger8", 
        "korName" : "1955 버거", 
        "engName" : "1955 Burger", 
        "description" : "1955 버거 Burger!!"
    },
    {
        "id": 13, 
        "category" : "Burger",
        "src" : burgerImages.burger9, 
        "alt" : "burger9", 
        "korName" : "맥치킨 모짜렐라", 
        "engName" : "Mac Chicken Mochallera burger", 
        "description" : "맥치킨 모짜렐라 Burger!!"
    },
    {
        "id": 14, 
        "category" : "Burger",
        "src" : burgerImages.burger10, 
        "alt" : "burger10", 
        "korName" : "맥치킨 버거", 
        "engName" : "Mac Chicken Burger", 
        "description" : "맥치킨 버거 Burger!!"
    },

];