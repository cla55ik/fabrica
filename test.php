<?php 

if (isset($_POST)) {
    $data = $_POST;
    

    if ($data['type'] == 'signup') {
        
        if ($data['email'] == '' || $data['pass'] == ''|| $data['repass'] == '') {
            $res = 'Заполните все поля';
            echo json_encode($res);
            die();
        }

        if($data['pass'] != $data['repass']){
            $res = 'Пароли не совпадают';
            echo json_encode($res);
            die();
        }

        if($data['pass'] == $data['repass'] && $data['email'] != ''){
            $res = 'ok';
            echo json_encode($res);
            die();
        }

    }elseif($data['type'] == 'callback'){
        if ($data['name'] == '' || $data['email'] == ''|| $data['text'] == '') {
            $res = 'Заполните все поля';
            echo json_encode($res);
            die();
        }else{
            $res = 'Спасибо, данные отправлены';
            echo json_encode($res);
            die();
        }
    }elseif($data['type'] == 'signin'){
        if ($data['email'] == '' || $data['pass'] == '') {
            $res = 'Заполните все поля';
            echo json_encode($res);
            die();
        }else{
            $res = 'Спасибо, данные отправлены';
            echo json_encode($res);
            die();
        }
    }
    else{
        $res = 'Error';
        echo json_encode($res);
        die();  
    }
   

    
}