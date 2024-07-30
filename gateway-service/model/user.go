package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	EmailAddress   string `gorm:"unique;not null;default:null"`
	Username       string `gorm:"unique;not null;default:null"`
	HashedPassword []byte `gorm:"not null;default:null"`
}
