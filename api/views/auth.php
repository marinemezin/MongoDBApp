<?php
      function auth(){
      if(isset($_POST["nom"]) && isset($_POST["passwd"]))
      {
      $nom=$_POST["nom"];
      $passwd=$_POST["passwd"];
      $chaine=$nom.":".$passwd;
      echo "nom = " .$nom. "<br>";
      echo "password = " .$passwd. "<br>";
      echo "chaine =" .$chaine. "<br>";
      //$i=1;
      $id_file=fopen("utilisateurs.txt","r" );
      //while($ligne=fgets($id_file,100))
      //{
      //echo $ligne;
      if(strcmp("admin:admin", $chaine) == 0)
      {
      echo "Acces autorise;. <br>";
      //echo "<a href=\"admin_id.html\"><img src=\"images/quitter.jpg\"></a>";
      //echo $chaine;
      }
      else
      {
      echo "<b>Accs refuse; !</b>\n<br>Assurez vous que votre login et mot de passe sont valides.<br>";
      //echo "<br><hr><br><a href=\"index1.html\"><img src=\"images/retour.jpg\"></a><br>";
      //echo $chaine;
      exit();
      }
      //} //fin du while
      //fclose($id_file);
      }
      else
      {
      echo "<h2>Veuillez vous authentifier !</h2> ";
      }
      }
      echo auth();
      ?>