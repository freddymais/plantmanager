import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native'
import { EnviromentButton } from '../components/EnviromentButton'

import { Header } from '../components/Header'
import { PlantCardPrimary } from '../components/PlantCardPrimary'
import { Load } from '../components/Load'
import api from '../services/api'

import styles from '../styles/plantSelect'
import colors from '../styles/colors'

interface EnviromentProps {
   key: string,
   title: string,
}
interface PlantsProps {
   id: number,
   name: string,
   about: string,
   water_tips: string,
   photo: string,
   environments: [string],
   frequency: {
      times: number,
      repeat_every: string
   }
}

export function PlantSelect() {
   const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
   const [plants, setPlants] = useState<PlantsProps[]>([])
   const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([])
   const [enviromentsSelected, setEnviromentsSelected] = useState('all')
   const [loading, setLoading] = useState(true)
   const [page, setPage] = useState(1)
   const [loadingMore, setLoadingMore] = useState(false)
   const [loadingAll, setLoadingAll] = useState(false)

   async function fetchPlants() {
      const { data } = await api.get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);
      if (!data)
         return setLoading(true)

      if (page > 1) {
         setPlants(oldValue => [...oldValue, ...data])
         setFilteredPlants(oldValue => [...oldValue, ...data])
      } else {
         setPlants(data)
         setFilteredPlants(data)
      }

      setLoading(false)
      setLoadingMore(false)
   }

   function handleEnviromentSelected(enviroment: string) {
      setEnviromentsSelected(enviroment)

      if (enviroment === 'all') {
         return setFilteredPlants(plants);
      }

      const filtered = plants.filter(plantItem =>
         plantItem.environments.includes(enviroment)
      );

      setFilteredPlants(filtered);
   }

   function handleFetchMore(distance: number) {
      if (distance < 1)
         return

      setLoadingMore(true)
      setPage(oldvalue => oldvalue + 1)
      fetchPlants()
   }



   useEffect(() => {
      async function fetchEnviroment() {
         const { data } = await api.get('plants_environments?_sort=title&order=asc');
         setEnviroments([
            {
               key: 'all',
               title: 'Todos'
            },
            ...data
         ])
      }
      fetchEnviroment()
   }, [])

   useEffect(() => {

      fetchPlants()
   }, [])


   if (loading) {
      return <Load />
   }
   return (
      <View style={styles.container}>
         <View style={styles.vHeader}>

            <Header />

            <Text style={styles.title}>
               Em qual ambiente
            </Text>
            <Text style={styles.subTitle}>
               Você quer colocar sua planta?
            </Text>
         </View>

         <View>
            <FlatList
               data={enviroments}
               renderItem={({ item }) => (
                  <EnviromentButton
                     key={item.title}
                     title={item.title}
                     active={item.key === enviromentsSelected}
                     onPress={() => handleEnviromentSelected(item.key)}
                  />
               )}
               horizontal
               showsHorizontalScrollIndicator={false}
               contentContainerStyle={styles.flatList}

            />
         </View>

         <View style={styles.plants}>
            <FlatList
               data={filteredPlants}
               renderItem={({ item }) => (
                  <PlantCardPrimary
                     key={item.id}
                     data={item}
                  />
               )}
               showsVerticalScrollIndicator={false}
               numColumns={2}
               contentContainerStyle={styles.contentContainerStyle}
               onEndReachedThreshold={0.1}
               onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
               ListFooterComponent={
                  loadingMore
                     ? <ActivityIndicator color={colors.green_dark} />
                     : <></>
               }
            />

         </View>

      </View>
   )
}