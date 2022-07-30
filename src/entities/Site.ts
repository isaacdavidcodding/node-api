import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity('Sites')
class Site {
  @PrimaryColumn()
  id: string
  
  @Column()
  endereco: string

  @Column()
  descricao: string
}

export { Site }
