"""Add author to Piece

Revision ID: 2f2e12b53841
Revises: 465b75670e5
Create Date: 2015-03-12 19:21:33.004568

"""

# revision identifiers, used by Alembic.
revision = '2f2e12b53841'
down_revision = '465b75670e5'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('piece', sa.Column('author', sa.String(length=100), nullable=True))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('piece', 'author')
    ### end Alembic commands ###
