import  {View,Text,Image} from 'react-native'
import styles from './Detail.style'
import useFetch from '../../components/hooks/useFetch/useFetch'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'


//   const {loading,error,data} =useFetch(url+"/"+id) uzun yoldan itemlara erisme islemi id'i linkin sonuna / 'dan sonra ekleyip ulasıyoruz aslında bir nevi api 'ı globalde kulllanma yöntemi

export default function Detail({route}){
   
    const {item} =route.params
 
    return(
        <View style ={styles.container}>
                <Image style = {styles.image} source ={{uri:item.image}}/>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style ={styles.description}>{item.description}</Text>
            <Text style ={styles.price}>${item.price}</Text>
        
        </View>
    )
}