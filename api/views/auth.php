<?php
      if(isset($_POST["login"]) && isset($_POST["password"]))
      {
      $nom=$_POST["login"];
      $passwd=$_POST["password"];
      $chaine=$nom.":".$passwd;
      //echo "nom = " .$nom. "<br>";
      //echo "password = " .$passwd. "<br>";
      //echo "chaine =" .$chaine. "<br>";
      //$i=1;
      //$id_file=fopen("utilisateurs.txt","r" );
      //while($ligne=fgets($id_file,100))
      //{
      //echo $ligne;
      if(strcmp("admin", $nom) == 0)
      {
	  //$url = './add_query.html'
	  //header('Location: '.$url);
      echo "Acces autorise;. <br>";
      //echo "<a href=\"admin_id.html\"><img src=\"images/quitter.jpg\"></a>";
      //echo $chaine;
      }
      else
      {
	  echo "<b>Accs refuse; !</b>\n<br>Assurez vous que votre login et mot de passe sont valides.<br>";
      //echo "<br><hr><br><a href=\"index1.html\"><img src=\"images/retour.jpg\"></a><br>";
      //echo $chaine;
      }
      //} //fin du while
      //fclose($id_file);
      }
      else
      {
      echo "<h2>Veuillez vous authentifier !</h2> ";
      }
?>