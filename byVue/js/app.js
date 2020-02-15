//by Rooney, 새로운 Vue 인스턴스_200214
new Vue({
    //by Rooney,html의 어느부분에 마운팅 될것인지_200214
    el: "#app",
    //어떤 데이터를 표시 할 것인지
    data: {
        //by Rooney,index.html의 v-model='query'와 바인딩_200214
        query: ""
    },
    methods: {
        //by Rooney,검색 폼에서 엔터를 누를 경우 동작하는 methods_200215
        onSubmit(e) {
            debugger;
        },
        //by Rooney,검색 폼에서 검색어를 모두 지운 경우 동작하는 methods_200215
        onKeyup(e) {
            if (!this.query.length) {
                this.onReset();
            }
        },
        //by Rooney,검색 폼에서 x 버튼을 클릭한 경우 동작하는 methods_200215
        onReset(e) {
            this.query = "";
            //todo 검색결과를 숨기는 ...
            debugger;
        }
    }
});
