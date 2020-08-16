import { observable, action } from 'mobx';

export default class {

    // 홈 커버 애니메이션 관련 state
    @observable coverUnwrapped = false;
    @action ifUnwrapped = () => this.coverUnwrapped = true;

    // ABOUT, CRAFT의 폰트 크기 관련 state
    @observable menuFontSize = 80;
    @action changeFontSize = isMobile => {
        if (isMobile) {
            this.menuFontSize = 60;
        }
    };

    //ABOUT, CRAFT 각각 클릭 여부 관련 state
    @observable menuClicked = false;
    @observable about = false;
    @observable craft = false;
    @observable aniEnd = false;

    @action whatIsClicked = clickedThing => {
        this.menuClicked = true;
        // 둘 중 클릭된 메뉴만 true로 변경
        this[clickedThing] = true;
    };
    @action whenAniEnded = () => {
        this.aniEnd = true;
    };

    // about 위치 선정
    @observable aboutX = 0;
    @observable aboutY = 0;
    @observable aboutWid = 0;
    @observable aboutHei = 0;

    @action getAboutPos = (X, Y) => {
        this.aboutX = X;
        this.aboutY = Y;
    };
    @action getAboutSize = (X, Y) => {
        this.aboutWid = X;
        this.aboutHei = Y;
        const txtSize = [X, Y]
        localStorage.setItem('txtSize', JSON.stringify(txtSize));
    };

    // craft 위치 선정
    @observable craftX = 0;
    @observable craftY = 0;
    @observable craftWid = 0;
    @observable craftHei = 0;

    @action getCraftPos = (X, Y) => {
        this.craftX = X;
        this.craftY = Y;
    };
    @action getCraftSize = (X, Y) => {
        this.craftWid = X;
        this.craftHei = Y;
        const txtSize = [X, Y]
        localStorage.setItem('txtSize', JSON.stringify(txtSize));
    };

    //menuOpener 관련
    @observable openerLoaded = false;
    @observable txtMoved = false;

    @action loadingIsOver = () => {
        this.openerLoaded = true;
    };
    @action movingIsOver = () => {
        this.txtMoved = true;
    };
};