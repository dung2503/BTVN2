function result(semester_1,semester_2,Year,summerise){
    var result = 0;
    var str_result= '';
    if(semester_1 !='' && semester_2 !=''){
        semester_1 = Number(semester_1)
        semester_2 = Number(semester_2)
        if( semester_1 >= 0 && semester_1 <= 10 && semester_2 >= 0 && semester_2 <= 10){
             if(Year == 1){
                result = (semester_1+(semester_2 * 2))/3
             }else if(Year == 2){
                result = (semester_1+(semester_2 * 3))/4
             }else if(Year == 3){
                result = (semester_1+(semester_2 * 4))/5
             }
             document.getElementById("summerise").value = result
        if(result >= 9){
            str_result = 'HỌC SINH XUẤT SẮC'
        }else if(result >= 8){
            str_result = 'HỌC SINH GIỎI'
        }else if(result >= 7){
            str_result = 'HỌC SINH KHÁ'
        } else if(result >= 5){
            str_result = 'HỌC SINH TRUNG BÌNH'
        }else{
            str_result = 'HỌC SINH YẾU'
        }
        document.getElementById("result").innerHTML = str_result;
        document.getElementById("result").style.color = "red";
        }else{
            alert("Điểm của bạn chỉ từ 0 -> 10")
        }
    }else{
        alert("Vui lòng nhập điểm")
    }
}
function cancel() {
   document.getElementById("semester_1").value = '';
   document.getElementById("semester_2").value = '';
   document.getElementById("Year").value = 1;
   document.getElementById("summerise").value = '';
   document.getElementById("result").innerHTML = '';
}