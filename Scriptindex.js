// JavaScript source code

let Content = document.getElementById("Change_Content")
let Key_Right = document.getElementById("Right")
let Key_Lift = document.getElementById("Lift")
 

/*Key_Right.addEventListener()*/

    function chang_Right(i) {
       
            if (i == 0) {
                Content.te = "����� �� �� ���� ����� ��� ���� �� ���� ������ ��� ����"

                i++
            }
            if (i == 1) {
                Content.textContent = "�� ����� ����� ��� �������� �������� �� ����� ��� ��� ����� ���� ������"
                i++
            }
            
       
       

    }
    function chang_Lift(i) {

        if (i == 1) {
            Content.textContent = "saleh"

            i--;
        }
        if (i == 2) {
            Content.textContent = "ahmed"
            i--;
        }


    }



