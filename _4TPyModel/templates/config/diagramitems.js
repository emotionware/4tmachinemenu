function procesar(item,diagrama){


/////////////////////////////////////////EJEMPLO
if (diagrama=='menu'){
	if (item==13){
        window.open('../../rendergrid?grid=tables/tblsysuser','_self');
    }
    
	if (item==12){
        window.open('../../rendergrid?grid=tables/tbldocumento','_self');
    }

	if (item==10){
        window.open('../../rendergrid?grid=tables/tblbackup','_self');
    }
    if (item==14){
        window.open('/static/diagramas/index.html?diagrama=menu','_self');
    }
 
    
 
    
    
        
   if (item==18){
        window.open(window.location.protocol + '//' + '127.0.0.1' + ':5000','_blank');
    }
    
   if (item==19){
        window.open(window.location.protocol + '//' + '127.0.0.2' + ':5000','_blank');
    }
    
   if (item==20){
        window.open(window.location.protocol + '//' + '127.0.0.3' + ':5000','_blank');
    }
    
   if (item==23){
        window.open(window.location.protocol + '//' + '127.0.0.3' + ':5000','_blank');
    }    
    
   if (item==24){
        window.open(window.location.protocol + '//' + '127.0.0.5' + ':5000','_blank');
    }    
    
   if (item==27){
        window.open(window.location.protocol + '//' + '127.0.0.7' + ':5000','_blank');
    }       
    
   if (item==26){
        window.open(window.location.protocol + '//' + '127.0.0.6' + ':5000','_blank');
    }       
        
         if (item==22){
        window.open('http://portal.soluboxes.com','_blank');
    } 
    
}

 
 

}